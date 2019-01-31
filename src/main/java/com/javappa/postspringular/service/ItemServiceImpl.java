package com.javappa.postspringular.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.javappa.postspringular.dto.ItemDTOResponse;
import com.javappa.postspringular.repository.ItemRepository;

@Service
public class ItemServiceImpl implements ItemService {

	private ItemRepository itemRepository;
	
	@Autowired
	public ItemServiceImpl(ItemRepository itemRepository) {
		this.itemRepository = itemRepository;
	}

	public List<ItemDTOResponse> getItems() {

		List<ItemDTOResponse> items = itemRepository.findAll().stream().map(item -> new ItemDTOResponse(item.getName()))
				.collect(Collectors.toList());
		return items;
	}
}
