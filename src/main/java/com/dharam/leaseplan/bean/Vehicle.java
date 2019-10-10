package com.dharam.leaseplan.bean;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Vehicle {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	@Column(name = "make_name")
	private String makeName;
	@Column(name = "model_name")
	private String modelName;
	@Column(name = "model_edition")
	private String modelEdition;
	@Column(name = "list_price")
	private double listPrice;
	
	@OneToMany(cascade = CascadeType.ALL)
	private List<VehicleOption> vehicleOptions;
	
	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getMakeName() {
		return makeName;
	}
	public void setMakeName(String makeName) {
		this.makeName = makeName;
	}
	public String getModelName() {
		return modelName;
	}
	public void setModelName(String modelName) {
		this.modelName = modelName;
	}
	public String getModelEdition() {
		return modelEdition;
	}
	public void setModelEdition(String modelEdition) {
		this.modelEdition = modelEdition;
	}
	public double getListPrice() {
		return listPrice;
	}
	public void setListPrice(double listPrice) {
		this.listPrice = listPrice;
	}
	public List<VehicleOption> getVehicleOptions() {
		return vehicleOptions;
	}
	public void setVehicleOptions(List<VehicleOption> vehicleOptions) {
		this.vehicleOptions = vehicleOptions;
	}
	
	
}
