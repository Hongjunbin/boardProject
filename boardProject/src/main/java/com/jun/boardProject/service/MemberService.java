package com.jun.boardProject.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jun.boardProject.dao.MemberDao;
import com.jun.boardProject.vo.Member;

@Service
public class MemberService {
	
	@Autowired
	private MemberDao memberDao;

	public Member loginMember(Member m) {
		return memberDao.loginMember(m);
	}
	
	public int joinMember(Member m) {
		return memberDao.joinMember(m);
	}
	
	public String memberIdCheck(String checkUserId) {
		return memberDao.memberIdCheck(checkUserId);
	}

}
