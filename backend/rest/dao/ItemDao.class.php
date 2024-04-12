<?php

require_once __DIR__ . '/BaseDao.class.php';

class ItemDao extends BaseDao {
    public function __construct() {
        parent::__construct('items');
    }

    public function add_item($item) {
        if (isset($item['category'])) {
            $category = $item['category'];
            if ($category === 'package' || $category === 'car' || $category === 'hotel') {
                $query = "";
                if ($category === 'package') {
                    $query = "INSERT INTO items 
                        (name, description, price, stock_quantity, imgsSrcs, days, min_persons, max_persons, category, title, intro, status)
                        VALUES 
                        (:name, :description, :price, :stock_quantity, :imgsSrcs, :days, :min_persons, :max_persons, :category, :title, :intro, :status)";
                } elseif ($category === 'car') {
                    $query = "INSERT INTO items 
                        (name, description, price, stock_quantity, imgsSrcs, min_days, max_days, persons, category, title, intro, status)
                        VALUES 
                        (:name, :description, :price, :stock_quantity, :imgsSrcs, :min_days, :max_days, :persons, :category, :title, :intro, :status)";
                } elseif ($category === 'hotel') {
                    $query = "INSERT INTO items 
                        (name, description, price, stock_quantity, imgsSrcs, min_days, max_days, min_persons, max_persons, category, title, intro, status)
                        VALUES 
                        (:name, :description, :price, :stock_quantity, :imgsSrcs, :min_days, :max_days, :min_persons, :max_persons, :category, :title, :intro, :status)";
                }
                $statement = $this->connection->prepare($query);
                $statement->bindParam(':name', $item['name']);
                $statement->bindParam(':description', $item['description']);
                $statement->bindParam(':price', $item['price']);
                $statement->bindParam(':stock_quantity', $item['stock_quantity']);
                $statement->bindParam(':imgsSrcs', $item['imgsSrcs']);
                $statement->bindParam(':category', $item['category']);
                $statement->bindParam(':title', $item['title']);
                $statement->bindParam(':intro', $item['intro']);
                $statement->bindParam(':status', $item['status']);

                if ($category === 'package') {
                    $statement->bindParam(':days', $item['days']);
                    $statement->bindParam(':min_persons', $item['min_persons']);
                    $statement->bindParam(':max_persons', $item['max_persons']);
                } elseif ($category === 'car') {
                    $statement->bindParam(':min_days', $item['min_days']);
                    $statement->bindParam(':max_days', $item['max_days']);
                    $statement->bindParam(':persons', $item['persons']);
                } elseif ($category === 'hotel') {
                    $statement->bindParam(':min_days', $item['min_days']);
                    $statement->bindParam(':max_days', $item['max_days']);
                    $statement->bindParam(':min_persons', $item['min_persons']);
                    $statement->bindParam(':max_persons', $item['max_persons']);
                }

                $statement->execute();
                $item['id'] = $this->connection->lastInsertId();
                return $item;
            } else {
                return ['error' => 'Invalid category'];
            }
        } else {
            return ['error' => 'Category is not set'];
        }
    }
}
