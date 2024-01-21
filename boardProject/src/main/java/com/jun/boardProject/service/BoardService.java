package com.jun.boardProject.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jun.boardProject.dao.BoardDao;
import com.jun.boardProject.vo.Board;

@Service
public class BoardService {
	
	@Autowired
	private BoardDao boardDao;
	
	public List<Board> allBoardPage() {
		return boardDao.allBoardPage();
	}
	
	public int insertWrite(Board board) {
		return boardDao.insertWrite(board);
	}

}
