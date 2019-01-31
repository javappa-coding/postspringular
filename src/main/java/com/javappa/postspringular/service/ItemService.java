package com.javappa.postspringular.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.javappa.postspringular.dto.ItemDTOResponse;

@Service
public interface ItemService {

	List<ItemDTOResponse> getItems();
}
	