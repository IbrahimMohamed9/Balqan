<?php

require_once __DIR__ . '/../dao/ItemDao.class.php';

class ItemService {
  private $item_dao;
  public function __construct() {
      $this->item_dao = new ItemDao();
  }
  public function add_item($item){
    return $this->item_dao->add_item($item);
  }
}
