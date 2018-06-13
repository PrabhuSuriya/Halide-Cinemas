"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@tsed/common");
const testing_1 = require("@tsed/testing");
const tools_1 = require("../../../test/tools");
const CalendarsService_1 = require("../../services/calendars/CalendarsService");
const MemoryStorage_1 = require("../../services/storage/MemoryStorage");
const CalendarsCtrl_1 = require("./CalendarsCtrl");
describe("CalendarsCtrl", () => {
    describe("without IOC", () => {
        before(() => {
            this.calendarsCtrl = new CalendarsCtrl_1.CalendarsCtrl(new CalendarsService_1.CalendarsService(new MemoryStorage_1.MemoryStorage()));
        });
        it("should do something", () => {
            tools_1.expect(this.calendarsCtrl).to.be.an.instanceof(CalendarsCtrl_1.CalendarsCtrl);
        });
    });
    describe("via InjectorService to mock other service", () => {
        before(testing_1.inject([common_1.ControllerService], (controllerService) => {
            this.calendarsService = {
                find: tools_1.Sinon.stub().returns(Promise.resolve({ id: "1" }))
            };
            const locals = new Map();
            locals.set(CalendarsService_1.CalendarsService, this.calendarsService);
            this.CalendarsCtrl = controllerService.invoke(CalendarsCtrl_1.CalendarsCtrl, locals);
            this.result = this.CalendarsCtrl.get("1");
            return this.result;
        }));
        it("should get the service from InjectorService", () => {
            tools_1.expect(this.CalendarsCtrl).to.be.an.instanceof(CalendarsCtrl_1.CalendarsCtrl);
        });
        it("should have a fake memoryStorage", () => {
            tools_1.expect(this.CalendarsCtrl.calendarsService).to.equal(this.calendarsService);
        });
        it("should have been called the CalendarService.find() method", () => {
            this.calendarsService.find.should.be.calledWithExactly("1");
        });
        it("should return the calendar", () => {
            return this.result.should.eventually.deep.equal({ id: "1" });
        });
    });
});
//# sourceMappingURL=CalendarsCtrl.spec.js.map