package com.javappa.postspringular.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.javappa.postspringular.domain.Item;

public interface ItemRepository extends JpaRepository<Item, Long> {

}