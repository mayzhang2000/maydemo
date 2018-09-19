package com.maydemo.maydenomodb.bean;

import com.amazonaws.services.dynamodbv2.document.utils.ValueMap;

import java.util.HashMap;

public class MovieQueryBean {
    String query;
    HashMap<String, Object> valueMap;
    HashMap<String, String> nameMap;

    public String getQuery() {
        return query;
    }

    public void setQuery(String query) {
        this.query = query;
    }

    public HashMap getValueMap() {
        return valueMap;
    }

    public void setValueMap(HashMap<String, Object> valueMap) {
        this.valueMap = valueMap;
    }

    public HashMap<String, String> getNameMap() {
        return nameMap;
    }

    public void setNameMap(HashMap<String, String> nameMap) {
        this.nameMap = nameMap;
    }

}
