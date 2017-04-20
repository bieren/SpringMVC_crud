package com.sp.handler;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.sp.dao.DepartmentDao;
import com.sp.dao.EmployeeDao;
import com.sp.entity.Employee;

@Controller
public class EmployeeHandler {
	
	@Autowired
	private EmployeeDao employeedao;

	@Autowired
	private DepartmentDao departmentDao;
	
	


	@RequestMapping(value="/emp/{id}",method = RequestMethod.PUT)
	public String save(@PathVariable("id") Integer id ,Employee employee){
		
		employeedao.save(employee);
		return "redirect:/emps";
	}

	@RequestMapping(value="/emp",method = RequestMethod.POST)
	public String save(Employee employee){
		employeedao.save(employee);
		return "redirect:/emps";
	}

	@RequestMapping(value="/input/{id}",method = RequestMethod.GET)
	public String input(@PathVariable("id") Integer id,Map<String, Object> map){
		map.put("employee", employeedao.get(id));
		map.put("departments", departmentDao.getALL());
		return "crud/input";
	}
	
	@RequestMapping(value="/input",method = RequestMethod.GET)
	public String input(Map<String, Object> map){
		map.put("employee", new Employee());
		map.put("departments", departmentDao.getALL());
		return "crud/input";
	}
	
	@RequestMapping(value="/emp/{id}",method = RequestMethod.DELETE)
	public String list(@PathVariable("id") Integer id){
		
		employeedao.delete(id);
		return "redirect:/emps";
	}
	@RequestMapping(value="/emps",method = RequestMethod.GET)
	public String list(Map<String, Object> map){
		
		map.put("employees", employeedao.getAll());
		return "crud/list";
	}
}
