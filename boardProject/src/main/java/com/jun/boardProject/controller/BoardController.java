package com.jun.boardProject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.jun.boardProject.service.BoardService;
import com.jun.boardProject.vo.Board;
import com.jun.boardProject.vo.Member;

import jakarta.servlet.http.HttpSession;

@RestController
public class BoardController {
	
	@Autowired
	private BoardService boardService;

	@GetMapping("/board")
	public List<Board> allBoardPage() {
		List<Board> list = boardService.allBoardPage();
		return list;
	}
	
	@GetMapping("/search")
	public List<Board> searchList(@RequestParam("keyword") String keyword) {
		System.out.println(keyword);
		List<Board> list = boardService.searchList(keyword);
		return list;
	}
	
	
//	@GetMapping("getWritePage")
//	public ModelAndView getWritePage(ModelAndView mv, HttpSession session) {
//		if(session.getAttribute("loginUser") == null) {
//			mv.setViewName("redirect:/");
//			return mv;
//		}
//		mv.setViewName("board/boardWritePage");
//		return mv;
//	}
//	
//	@GetMapping("insertWrite")
//	public ModelAndView insertWrite(ModelAndView mv, 
//			                        HttpSession session,
//			                        Board board) {
//		
//		Member member = (Member)session.getAttribute("loginUser");
//		
//		board.setUserNo(member.getUserNo());
//		board.setUserName(member.getUserName());
//		
//		if(boardService.insertWrite(board) == 0) {
//			System.out.println("게시글 등록 실패");
//			mv.setViewName("redirect:/");
//			return mv;
//		}
//		
//		mv.setViewName("redirect:/");
//		
//		return mv;
//	}
//	
}
