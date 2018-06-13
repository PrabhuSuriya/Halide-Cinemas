"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@tsed/common");
const testing_1 = require("@tsed/testing");
const chai_1 = require("chai");
const MemoryStorage_1 = require("../storage/MemoryStorage");
const CalendarsService_1 = require("./CalendarsService");
describe("CalendarsService", () => {
    describe("without IOC", () => {
        before(() => {
            this.calendarsService = new CalendarsService_1.CalendarsService(new MemoryStorage_1.MemoryStorage());
        });
        it("should do something", () => {
            chai_1.expect(this.calendarsService).to.be.an.instanceof(CalendarsService_1.CalendarsService);
        });
    });
    describe("with inject()", () => {
        before(testing_1.inject([CalendarsService_1.CalendarsService], (calendarsService) => {
            this.calendarsService = calendarsService;
        }));
        it("should get the service from the inject method", () => {
            chai_1.expect(this.calendarsService).to.be.an.instanceof(CalendarsService_1.CalendarsService);
        });
    });
    describe("via InjectorService to mock other service", () => {
        before(testing_1.inject([common_1.InjectorService], (injectorService) => {
            this.memoryStorage = {
                set: () => {
                },
                get: () => {
                }
            };
            const locals = new Map();
            locals.set(MemoryStorage_1.MemoryStorage, this.memoryStorage);
            this.calendarsService = injectorService.invoke(CalendarsService_1.CalendarsService, locals);
        }));
        it("should get the service from InjectorService", () => {
            chai_1.expect(this.calendarsService).to.be.an.instanceof(CalendarsService_1.CalendarsService);
        });
        it("should have a fake memoryStorage", () => {
            chai_1.expect(this.calendarsService.memoryStorage).to.equal(this.memoryStorage);
        });
    });
});
//# sourceMappingURL=CalendarsService.spec.js.map