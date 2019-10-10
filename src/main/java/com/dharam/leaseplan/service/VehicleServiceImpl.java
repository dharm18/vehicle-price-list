package com.dharam.leaseplan.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dharam.leaseplan.bean.Vehicle;
import com.dharam.leaseplan.dao.VehicleDao;

@Service
public class VehicleServiceImpl implements VehicleService {

	@Autowired
	private VehicleDao vehicleDao;
	
	@Override
	public List<Vehicle> vehicleList() {
		return vehicleDao.findAll();
	}

	@Override
	public Optional<Vehicle> findById(Long vehicleId) {
		return vehicleDao.findById(vehicleId);
	}

	@Override
	public Vehicle save(Vehicle vehicle) {
		return vehicleDao.save(vehicle);
	}

	@Override
	public void delete(Vehicle vehicle) {
		vehicleDao.delete(vehicle);
	}
	
	

}
