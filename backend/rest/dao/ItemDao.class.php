<?php

require_once __DIR__ . '/BaseDao.class.php';

class ItemDao extends BaseDao {
    public function __construct() {
        parent::__construct('items');
    }

    public function add_item($item) {
        $table = $this->getTable();
        if (isset($item['category'])) {
            $category = $item['category'];
            if ($category === 'package' || $category === 'car' || $category === 'hotel') {
                if ($category === 'package') {
                    $entity = [
                        "name" => $item['name'],
                        "description" => $item['description'],
                        "price" => $item['price'],
                        "stock_quantity" => $item['stock_quantity'],
                        "imgsSrcs" => $item['imgsSrcs'],
                        "days" => $item['days'],
                        "min_persons" => $item['min_persons'],
                        "max_persons" => $item['max_persons'],
                        "category" => $item['category'],
                        "title" => $item['title'],
                        "intro" => $item['intro'],
                        "status" => $item['status']
                    ];
                    return $this->insert($this->table, $entity);
                } elseif ($category === 'car') {
                    $entity = [
                        "name" => $item['name'],
                        "description" => $item['description'],
                        "price" => $item['price'],
                        "stock_quantity" => $item['stock_quantity'],
                        "imgsSrcs" => $item['imgsSrcs'],
                        "min_days" => $item['min_days'],
                        "max_days" => $item['max_days'],
                        "persons" => $item['persons'],
                        "category" => $item['category'],
                        "title" => $item['title'],
                        "intro" => $item['intro'],
                        "status" => $item['status']
                    ];
                    return $this->insert($this->table, $entity);
                } elseif ($category === 'hotel') {
                    $entity = [
                        "name" => $item['name'],
                        "description" => $item['description'],
                        "price" => $item['price'],
                        "stock_quantity" => $item['stock_quantity'],
                        "imgsSrcs" => $item['imgsSrcs'],
                        "min_days" => $item['min_days'],
                        "max_days" => $item['max_days'],
                        "min_persons" => $item['min_persons'],
                        "max_persons" => $item['max_persons'],
                        "category" => $item['category'],
                        "title" => $item['title'],
                        "intro" => $item['intro'],
                        "status" => $item['status']
                    ];
                    return $this->insert($this->table, $entity);
                }
            } else {
                return ['error' => 'Invalid category'];
            }
        } else {
            return ['error' => 'Category is not set'];
        }
    }

    public function get_items_by_category($category) {
        $query = "SELECT * FROM items WHERE category = :category";
        return $this->query($query, ['category' => $category]);
    }

    public function get_item_by_id($id) {
        $query = "SELECT * FROM items WHERE id = :id";
        return $this->query_unique($query, ['id' => $id]);
    }
}
