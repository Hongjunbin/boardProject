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
public class Member {
	
	private int userNo;
	private String userId;
	private String userPwd;
	private String userName;
	private String birthday;
	private String phone;
	private Date enrollDate;
	private Date modifyDate;
	private String status;

}
