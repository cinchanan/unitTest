import MockAdapter from "axios-mock-adapter";
import axios from "axios";
describe("test mockApi", () => {
  var mockApi = new MockAdapter(axios);
  //beforAll ทำครั้งแรก
  //ทำงานเมื่อเข้าสู่เคส
  beforeEach(() => {
    mockApi.reset();
  });
  it("should get request", async () => {
    //arrage
    mockApi.onGet("/user").reply(200, {
      statusCode: 1,
      status: "success",
      msg: "",
      data: [
        {
          id: 1,
          userName: "John",
        },
      ],
    });
    const expectedResult = "John";
    //action
    const result = await axios.get("/user");

    // console.log("response", response);
    //assert
    expect(result.data.data[0].userName).toBe(expectedResult);
  });
  it("should be post", async () => {
    mockApi
      .onPost("/add-users", {
        id: 2,
        name: "Max",
      })
      .reply(200, {
        statusCode: 1,
        status: "success",
        msg: "",
        data: [{ id: 2, name: "Max" }],
      });

    const expectedResult = 1;
    let body = { id: 2, name: "Max" };
    const result = await axios.post("/add-users", body);

    expect(result.data.statusCode).toBe(expectedResult);
  });
});
