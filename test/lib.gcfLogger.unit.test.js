// use 'unit test snippet'

const assert = require('assert');
const chai = require('chai').assert;
const parallel = require('mocha.parallel');

const gcfLogger = require('../lib/gcfLogger');

parallel(`gcfLogger unit tests`, async () => {

    describe('should success tests', (suite) => {
        
        it(`gcfLogger test`, async () => {

            const result = await gcfLogger.log('bkDyFVmqZ9CornB4bX1UVjCZfmwxJfyYDrS71xAoh+yG2TRuhw3tKCRHCijcN9uIm/A97tzmhedZaedp4tsLQAzGt6TVd3IsG8MO4o0+96dH1TUru7aMvbD/UF7F8ODgSAExK8Wq+nxj7IUNmCGQjpIk444FKCrWISEkB0D5i7KnVU0LdOYkNzIRDVyOWYwBbsDlO1F3XnrNTc6NxjKxY11QLvupyUJYOye8xfdmwQVJh44QdiyOLAaNkfJT6DGc/O7Tj5plXAXuSdZpPvzJK9iPbkMKPU52qOIoIp4iMI944Z2f1H43lrhx9m3AzDMb3MzDRm79rnFrpIvwvB5LEFR+UijQixzmwtOG2JktfqfTPt9jxuV3tQ22YZIER5takzzsA9b4+vW3Yls0f7C9sWGHqW7O7yZ2Vk0r9IVwreOOMelqNp1rfc14sSG69/aPIVFLNtY6Pvaiwc1/BSdZj7iBC1NRA4/m0cFlfppufoSGT6O4WkWpHCV8/gQy3unJ5nBiP1BeJqiUXY+3u0+VGxZV9NllAE5FdLLNl2Thalk5/gr2eSz3iLIUUfD3mGTwiXDGQigoZFv0QalArpiPGyCtsrcDYmZQsmiHClmFB7y0zKeSKLKrQGbgWo9PNL3IYAGLZZ8yhaDNVZf7Od0xBMxSzHTdtztP/8RJ9kqmaGmsXoCefCGtuy+k3FpygC4ag9wVR8en3SB1nVKhm+KKjHj3KBueHomEegIv5c6kUYdnWS3PkwMVTOCcD1XOrs9uYl6IWU+ol9y5qaqiKQDFq8JEMHsXSr1OsPVLvhHod4KgNlNCOF9kdkR6WZfMCiNOI44nynFwXXIyT7J+X5qLP5m+VBEIT1DFzHh9OeUI1QCzDvh74LuoYk2waNBVUav42g3k5MCeWDdEAWipd9QVtQn6ZgVY87WuWScB+ZKdvkZvYx7dyKm24sbcAFMP79qbIzcuYFKI7FbH1yDVGUS/HuIbmw+lqVbqF6UD4rj5LBBTbJCYbvWyT5xHt3F+ZUW08V0BjKGObASgUr1gS55DEN+IHF9fZubYSydBnCGOGDdK6Wejfjahm73AyajWpvNxDZRoaeysZNUCkEc0wkb1O81p4jtvtFaN53YVIX8pIINy9iIVl4zWFXD0yGWJWyEzOW1f/bECK1qTQ51Eev0OwNdLoRO2XpJMqCLwnxmtGq2E2eFAaBrs1SHt7ML07ZEyy9omIWJve/ztYWAAHEWxawxdqj1LmyVBJlCVZwTtB2KBbICPuIY2gyVPuDG8NXcTuAKuoI1kyX50QjyjdEoPa2f3av1Nlp5pN7xvFl3crRgP4oxgzCATlfe9KA/LNSyXFH2FrZm34R1N3yXn6qQFvHvBLvugl/EBkzYFPzwQRffUN3ecu7zCxMTtXBqFC0OTYyTNjjNcDanG7OwD', 'yxorghet1zque7Rkxe4obzoqq8rtWo7r');

            console.log(result);

        });

    });

});