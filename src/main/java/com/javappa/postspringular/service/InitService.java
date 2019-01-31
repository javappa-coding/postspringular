package com.javappa.postspringular.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.javappa.postspringular.domain.Item;
import com.javappa.postspringular.repository.ItemRepository;

@Service
public class InitService {

	private static final int GENERATED_ITEMS_NUMBER = 10;

	private ItemRepository itemRepository;

	@Autowired
	public InitService(ItemRepository itemRepository) {
		this.itemRepository = itemRepository;
	}

	public void initItems() throws Exception {

		List<Item> items = new ArrayList<>();
		for (int i = 1; i <= GENERATED_ITEMS_NUMBER; i++) {

			Item item = new Item();
			item.setName("Item " + i);
			item.setDescription("Item " + i + " description");

			items.add(item);

		}
		itemRepository.save(items);
	}
}
