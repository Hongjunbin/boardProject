package com.jun.boardProject.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.jun.boardProject.vo.Board;

@Mapper
public interface BoardDao {
	
	public List<Board> allBoardPage();
	
	public int insertWrite(Board board);

}
