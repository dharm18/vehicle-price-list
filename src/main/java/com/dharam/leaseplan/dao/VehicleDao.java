package com.dharam.leaseplan.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dharam.leaseplan.bean.Vehicle;

@Repository
public interface VehicleDao extends JpaRepository<Vehicle, Long> {

}
