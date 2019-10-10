package com.dharam.leaseplan.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dharam.leaseplan.bean.Vehicle;
import com.dharam.leaseplan.exception.ResourceNotFoundException;
import com.dharam.leaseplan.service.VehicleService;

@RestController
@RequestMapping("/api/v1")
public class VehicleController {

	@Autowired
	private VehicleService vehicleService;

	@GetMapping("vehicles")
	public List<Vehicle> vehicleList() {
		return vehicleService.vehicleList();
	}

	@GetMapping("/vehicles/{id}")
	public ResponseEntity<Vehicle> getVehicleById(@PathVariable(value = "id") Long vehicleId)
			throws ResourceNotFoundException {
		Vehicle vehicle = vehicleService.findById(vehicleId)
				.orElseThrow(() -> new ResourceNotFoundException("Vehicle not found for this id :: " + vehicleId));
		return ResponseEntity.ok().body(vehicle);
	}

	@PostMapping("/vehicles")
	public Vehicle createVehicle(@Valid @RequestBody Vehicle vehicle) {
		return vehicleService.save(vehicle);
	}

	@PutMapping("/vehicles/{id}")
	public ResponseEntity<Vehicle> updateVehicle(@PathVariable(value = "id") Long vehicleId,
			@Valid @RequestBody Vehicle vehicleDetails) throws ResourceNotFoundException {
		Vehicle vehicle = vehicleService.findById(vehicleId)
				.orElseThrow(() -> new ResourceNotFoundException("Vehicle not found for this id :: " + vehicleId));

		vehicle.setMakeName(vehicleDetails.getMakeName());
		vehicle.setModelName(vehicleDetails.getModelName());
		vehicle.setModelEdition(vehicleDetails.getModelEdition());
		vehicle.setListPrice(vehicleDetails.getListPrice());
		vehicle.setVehicleOptions(vehicleDetails.getVehicleOptions());

		final Vehicle updatedVehicle = vehicleService.save(vehicle);
		return ResponseEntity.ok(updatedVehicle);
	}

	@DeleteMapping("/vehicles/{id}")
	public Map<String, Boolean> deleteVehicle(@PathVariable(value = "id") Long vehicleId)
			throws ResourceNotFoundException {
		Vehicle vehicle = vehicleService.findById(vehicleId)
				.orElseThrow(() -> new ResourceNotFoundException("Vehicle not found for this id :: " + vehicleId));

		vehicleService.delete(vehicle);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}
