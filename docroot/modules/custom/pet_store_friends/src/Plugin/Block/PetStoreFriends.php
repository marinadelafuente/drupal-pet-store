<?php

namespace Drupal\pet_store_friends\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use GuzzleHttp\Client;

/**
 * Provides the block for the Pet Store Friends blog:
 *
 * @Block(
 *   id = "pet_store_friends",
 *   admin_label = @Translation("Pet Store Friends"),
 *   category = @Translation("Pet Store Friends")
 * )
 */
class PetStoreFriends extends BlockBase implements ContainerFactoryPluginInterface{
  /**
   * Guzzle\Client instance.
   *
   * @var \Guzzle\Client
   */
  protected $httpClient;

  /**
   * @param \Symfony\Component\DependencyInjection\ContainerInterface $container
   * @param array $configuration
   * @param string $plugin_id
   * @param mixed $plugin_definition
   *
   * @return static
   */

  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    return new static(
      $configuration,
      $plugin_id,
      $plugin_definition,
      $container->get('http_client')
    );
  }

  /**
   * @param array $configuration
   * @param string $plugin_id
   * @param mixed $plugin_definition
   * @param \Guzzle\Client $http_client
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, Client $http_client) {
    parent::__construct($configuration, $plugin_id, $plugin_definition);
    $this->httpClient = $http_client;
  }


  public function build() {
    return [
      '#theme' => 'pet_store_friends',
      '#title' => 'Pet store friends',
      '#description' => 'Latest article from my mates',
      '#posts' => json_decode($this->getPosts()),
      '#img' => 'http://placeimg.com/300/300/animals',
      '#link' => '/friends-articles',
      '#cache' => [
        'max-age' => 86400
      ],
    ];
  }

  /**
   * @throws \GuzzleHttp\Exception\GuzzleException
   */

  public function getPosts() {
    $url = 'https://jsonplaceholder.typicode.com/posts?_limit=1';
    $posts= $this->httpClient->request('GET', $url)->getBody() ->getContents();
    return $posts;
  }
}
