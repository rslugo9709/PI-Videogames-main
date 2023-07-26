const supertest = require('supertest');
const app = require('../../src/app.js');
const { Videogame, conn } = require('../../src/db.js');
const agent = supertest(app);


describe("Route testing", () => {

    describe("Get game by Id", ()=>{

        it("Should get a status of 200", async() =>{
            await agent.get("/videogame/1").expect(200);
        })
        it("Should get a status of 400", async() =>{
            await agent.get("/videogame/%fy").expect(400);
        })
        it("Should get a status of 500", async() =>{
            await agent.get("/videogame/habgadbhbhasdjkasd").expect(500);
        })

        //testeamos las propiedades

        it("Should receive an object with the properties: id, name, description, platforms, genres, image, releaseDate, rating", async() =>{
            const response = (await agent.get("/videogame/1")).body;
            expect(response).toHaveProperty("id")
            expect(response).toHaveProperty("name")
            expect(response).toHaveProperty("description")
            expect(response).toHaveProperty("platforms")
            expect(response).toHaveProperty("genres")
            expect(response).toHaveProperty("image")
            expect(response).toHaveProperty("releaseDate")
            expect(response).toHaveProperty("rating")
        })
    })



    describe("Get all games", () =>{

        it("Should get an status of 200 when all games are requested", async () =>{
            await agent.get("/videogames/").expect(200);
        })
        
        it("Should get an status of 200 when api games are requested", async () =>{
            await agent.get('/videogames/?src="api"').expect(200);
        })

        it("Should get an status of 200 when db games are requested", async () =>{
            await agent.get('/videogames/?src="db"').expect(200);
        })
    })
})