package com.jun.boardProject.vo;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Board {
	
	private int boardNo;
	private int userNo;
	private String userName;
	private String boardTitle;
	private String boardWriting;
	private String boardHits;
	private Date BoardDate;
	private int categoryNo;

}
