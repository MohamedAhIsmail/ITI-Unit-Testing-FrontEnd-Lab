// describe("2-message component integration testing:", () => {
//     it("expect component template to be empty", () => {
//         //Note: there is @if"messageService.messages.length" in line 1 in template
//     })
//     it("then expect div.msg to have the messages after setting it", () => {})
// })


import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessagesComponentForLab } from './messages.lab.component';
import { MessageService } from '../../services/message/message.service';
import { By } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

describe("2-message component integration testing:", () => {
  let component: MessagesComponentForLab;
  let fixture: ComponentFixture<MessagesComponentForLab>;
  let messageService: MessageService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, MessagesComponentForLab],
      providers: [MessageService],
    }).compileComponents();

    fixture = TestBed.createComponent(MessagesComponentForLab);
    component = fixture.componentInstance;
    messageService = TestBed.inject(MessageService);
  });

  it("expect component template to be empty", () => {
    fixture.detectChanges();

    let messageDiv = fixture.debugElement.query(By.css('div.msg'));
    expect(messageDiv).toBeFalsy();
  });

  it("then expect div.msg to have the messages after setting it", () => {
    messageService.messages.push(
      { id: 1, message: "Test Message 1" },
      { id: 2, message: "Test Message 2" },
    );
    fixture.detectChanges();

    let messageDivs = fixture.debugElement.queryAll(By.css('div.msg'));
    expect(messageDivs.length).toBe(2);
    expect(messageDivs[0].nativeElement.textContent).toContain("Test Message 1");
    expect(messageDivs[1].nativeElement.textContent).toContain("Test Message 2");
  });
});
