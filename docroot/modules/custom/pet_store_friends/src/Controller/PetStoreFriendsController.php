<?php

namespace Drupal\pet_store_friends\Controller;

use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\DependencyInjection\ContainerInterface;
use GuzzleHttp\Client;

/**
 * Class PetStoreFriendsController.
 *
 * @package Drupal\pet_store_friends\Controller
 */

class PetStoreFriendsController extends ControllerBase {

  /**
   * Guzzle\Client instance.
   *
   * @var \Guzzle\Client
   */
  protected $httpClient;

  /**
   * {@inheritdoc}
   */
  public function __construct(Client $http_client) {
    $this->httpClient = $http_client;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('http_client')
    );
  }

  public function content() {
    return [
        '#theme' => 'blog_list',
        '#title' => 'Friends pet blog',
        '#posts' => json_decode($this->getPosts()),
        '#link' => '/',
        '#cache' => [
        'max-age' => 86400
      ],
    ];
  }

  /**
   * @throws \GuzzleHttp\Exception\GuzzleException
   */
  public function getPosts() {
    $url = 'https://jsonplaceholder.typicode.com/posts?_limit=5';
    $posts= $this->httpClient->request('GET', $url)->getBody() ->getContents();
    return $posts;
  }
}
