function testBuild(){
    return "success";
}

if(process.argv.length === 1 && process.argv === "testBuild"){
    testBuild();
}