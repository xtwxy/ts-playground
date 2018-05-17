var str1 = "string"

console.log("=== tests.");

if(str1 === "string") {
    console.log("equal");
} else {
    console.log("not equal");
}

str1 = new String("string");

if(str1 === "string") {
    console.log("equal");
} else {
    console.log("not equal");
}

console.log("== tests.");

str1 = "string"
if(str1 == "string") {
    console.log("equal");
} else {
    console.log("not equal");
}

str1 = new String("string");

if(str1 == "string") {
    console.log("equal");
} else {
    console.log("not equal");
}

console.log("!= tests.");

str1 = "string"
if(str1 != "string") {
    console.log("not equal");
} else {
    console.log("equal");
}

str1 = new String("string");

if(str1 != "string") {
    console.log("not equal");
} else {
    console.log("equal");
}

console.log("!== tests.");

str1 = "string"
if(str1 !== "string") {
    console.log("not equal");
} else {
    console.log("equal");
}

str1 = new String("string");

if(str1 !== "string") {
    console.log("not equal");
} else {
    console.log("equal");
}
