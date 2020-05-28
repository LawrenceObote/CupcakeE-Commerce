package com.example.cupcakeBackend.model;

import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name = "cupcake")
public class Cupcake {




    @Id
    @GeneratedValue
    @Column(name = "cupcake_id")
    private long id;


    @Column(name = "cupcake_name")
    private String cupcakeName;

    @Column(name = "price")
    private int price;




    public Cupcake() {
        super();
    }

    public Cupcake(String cupcakeName) {
        super();
        this.cupcakeName = cupcakeName;

    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }


    public String getCupcakeName() {
        return cupcakeName;
    }

    public void setCupcakeName(String cupcakeName) {
        this.cupcakeName = cupcakeName;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }


}
