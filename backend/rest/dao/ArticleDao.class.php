<?php

require_once __DIR__ . '/BaseDao.class.php';

class ArticleDao extends BaseDao {
    public function __construct() {
        parent::__construct('articles');
    }

    public function add_article($article) {
        $table = $this->getTable();

        return $this->insert($table, $article);
    }

    public function get_articles() {
        $query = "SELECT * FROM articles";
        return $this->query($query);
    }

    public function get_articles_by_category($category) {
        $query = "SELECT * FROM articles WHERE category = :category";
        return $this->query($query, ['category' => $category]);
    }

    public function get_article_by_id($article_id) {
        $query = "SELECT * FROM articles WHERE article_id = :article_id";
        return $this->query_unique($query, ['article_id' => $article_id]);
    }

    public function delete_article($article_id) {
        $query = "DELETE FROM articles WHERE article_id = :article_id";
        return $this->execute($query, ['article_id' => $article_id]);
    }
    
    public function edit_article($article_id, $article) {
        
        $query = "UPDATE items SET 
            article_id = :article_id, 
            img = :img, 
            imgDesc = :imgDesc, 
            stock_quantity = :stock_quantity, 
            imgs_srcs = :imgs_srcs, 
            category = :category, 
            title = :title, 
            country = :country, 
            time = :time, 
            description = :description, 
            content = :content";
    
        $this->execute($query, $article);
    }
}
