package com.dharam.leaseplan.service;

import java.util.List;
import java.util.Optional;

import com.dharam.leaseplan.bean.Vehicle;

public interface VehicleService {

	List<Vehicle> vehicleList();

	Optional<Vehicle> findById(Long vehicleId);

	Vehicle save(Vehicle vehicle);

	void delete(Vehicle vehicle);
}
