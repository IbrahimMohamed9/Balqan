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
  public function get_items_by_category($category){
    return $this->item_dao->get_items_by_category($category);
  }
  public function get_item_by_id($item_id) {
    return $this->item_dao->get_item_by_id($item_id);
  }
}
