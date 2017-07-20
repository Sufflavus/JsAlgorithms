describe("Reverse String", function() {
    it("returns empty string for empty string", function() {
        var str = "";       
        var actual = reverseString(str);
        
        expect(actual).toEqual(str);
    }); 

    it("returns empty string of spaces for string of spaces", function() {
        var str = "     ";      
        var actual = reverseString(str);
        
        expect(actual).toEqual("     ");
    }); 

    it("returns correct result for a non-empty string", function() {
        var str = "Lorem";
        var actual = reverseString(str);
        
        expect(actual).toEqual("meroL");
    }); 

    it("returns empty string for null", function() {
        var actual = reverseString(null);     
        expect(actual).toEqual("");
    }); 

    it("returns correct result for string with letters, numbers and spaces 3", function() {
        var str = "Lorem   ipsum  2 dolor  5 sit amet";     
        var actual = reverseString(str);
        
        expect(actual).toEqual("tema tis 5  rolod 2  muspi   meroL");
    }); 
});