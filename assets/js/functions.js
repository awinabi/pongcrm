export default function helloWorld(name) {
    const num =  Math.floor(Math.random() * 10);     // returns a random integer from 0 to 9 
    console.log("calling random num gen");
    return "helloi worldy "+name+" "+num;
}
