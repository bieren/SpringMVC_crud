package com.sp.utils;

public class URL {

	
	public static final String GET="GET";
	public static final String POST="POST";
	/**
	 * 测试用服务器地址
	 */
//	public static final String serverIp="120.77.101.181";
//	public static final String serverIp="127.0.0.1:8080";
//	public static final String serverIp="192.168.3.18";
	
	/**
	 * 正式运营服务器地址
	 */
	public static final String serverIp="www.csbfxc.com";

	public static final String system="/OpenAPI/system";

	public static final String customer="/OpenAPI/user/customer";
	
	/*新闻部分*/
	public static String getNewsByType_Url				="http://" + serverIp + system +"/news/getNewsByType?newsType=%s&newsNextType=%s&pages=%s&dataSize=%s";
	public static String upvoteNews_Url					="http://" + serverIp + system +"/news/upvoteNews";
	public static String getNewsContent_Url				="http://" + serverIp + system +"/news/getNewsContent?newsId=%s";
	public static String getNewsByKeyword_Url			="http://" + serverIp + system +"/news/getNewsByKeyword";
	
	/*用户部分*/
	public static String createEnterpriseCustomer_Url	="http://" + serverIp + customer +"/createEnterpriseCustomer";
	public static String updateCustomer_Url				="http://" + serverIp + customer +"/updateCustomer";
	public static String customerLogin_Url				="http://" + serverIp + customer +"/customerLogin";
	public static String sendMobileCode_Url				="http://" + serverIp + customer +"/sendMobileCode";
	public static String getMobileCode_Url				="http://" + serverIp + customer +"/getMobileCode";
	public static String loginByPwd_Url					="http://" + serverIp + system +"/loginByPwd";
	public static String enterpriseLogin_Url			="http://" + serverIp + system +"/enterpriseLogin";
	public static String getCustOrderListForEnterPrise_Url="http://" + serverIp + "/OpenAPI/device/getCustOrderListForEnterPrise";
	
	
	/*提交表单*/
	public static String submitCooperation_Url			="http://" + serverIp + system +"/news/addProspectCustomer";


}
