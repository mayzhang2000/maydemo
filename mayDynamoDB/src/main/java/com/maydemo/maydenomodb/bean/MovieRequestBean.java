package com.maydemo.maydenomodb.bean;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

public class MovieRequestBean {

    private int year;
    private String title;

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public static void main(String[] args) {
        MovieRequestBean personRequest = new MovieRequestBean();
        System.out.println(personRequest);
    }

    public String toString() {
        final Gson gson = new GsonBuilder().setPrettyPrinting().create();
        return gson.toJson(this);
    }

}

