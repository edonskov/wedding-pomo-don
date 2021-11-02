package com.wedding.landing;

import org.junit.jupiter.api.Test;

public class Floren1 {
    @Test
    public void main() {
        int len = 10;
        String rep1 = "1000100000";
        String rep2 = "1000100001";
        StringBuilder result = new StringBuilder(0);
        for (int i = 0; i < len; i++) {
            if (rep2.charAt(i) != rep1.charAt(i)) {
                result.append('1');
            } else {
                result.append('0');
            }
        }

        System.out.println(result);
    }
}
