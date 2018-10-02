package com.maydemo.maydenomodblambda;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.maydemo.maydenomodb.bean.MovieQueryBean;
import com.maydemo.maydenomodb.bean.MovieRequestBean;
import com.maydemo.maydenomodblambda.handlers.GetMovieHandler;
import com.maydemo.maydenomodblambda.handlers.SaveMovieHandler;
import org.testng.annotations.Test;

import java.io.IOException;
import java.util.HashMap;

public class HandlerTest {
    @Test
    public void testSaveMovieHandler() {
        MovieRequestBean movieRequestBean = new MovieRequestBean();
        movieRequestBean.setYear(2018);
        movieRequestBean.setTitle("Forever Young");
        new SaveMovieHandler().handleRequest(movieRequestBean, null);
    }

    @Test
    public void testGetMovieHandler() {
        MovieQueryBean movieQueryBean = new MovieQueryBean();
        String query = "#yr = :yyyy";
        movieQueryBean.setQuery(query);

        try {
            String nameMapString = "{\"#yr\": \"year\"}";
            HashMap<String, String> nameMap = new ObjectMapper().readValue(nameMapString,
                    new TypeReference<HashMap<String, String>>() {
                    });
            movieQueryBean.setNameMap(nameMap);

            String valueMapString = "{\":yyyy\": 2018}";
            HashMap<String, Object> valueMap = new ObjectMapper().readValue(valueMapString,
                    new TypeReference<HashMap<String, Object>>() {
                    });

            movieQueryBean.setValueMap(valueMap);

            new GetMovieHandler().handleRequest(movieQueryBean, null);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
