package com.example.cupcakeBackend.model;

import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name = "comments")
public class Comment {




    @Id
    @GeneratedValue
    @Column(name = "timestamp")
    private int id;


    @Column(name = "comment")
    private String comment;






    public Comment() {
        super();
    }

    public Comment(String comment) {
        super();

        this.comment = comment;


    }



    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String Comment) {
        this.comment = comment;
    }




}
