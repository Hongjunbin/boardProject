package com.jun.boardProject.dao;

import org.apache.ibatis.annotations.Mapper;

import com.jun.boardProject.vo.Member;

@Mapper
public interface MemberDao {
	
	public Member loginMember(Member m);
	
	public int joinMember(Member m);
	
	public String memberIdCheck(String checkUserId);
	
}
