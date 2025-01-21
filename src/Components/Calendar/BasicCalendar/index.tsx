import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import { EventsData } from "@/Data/Calendar";
import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BasicCalendars } from "@/Constant";

const BasicCalendar = () => {
  const calendarEvents = EventsData.map((event) => ({
    id: event.id.toString(),
    title: event.title,
    start: event.start,
    end: event.end,
    allDay: event.allDay || false,
  }));

  return (
    <>
      <CommonBreadcrumb parent="Calendar" pageTitle="Calendar" />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CommonCardHeader heading={BasicCalendars} />
              <CardBody>
                <FullCalendar
                  plugins={[
                    dayGridPlugin,
                    timeGridPlugin,
                    interactionPlugin,
                    listPlugin,
                  ]}
                  initialView="dayGridMonth"
                  headerToolbar={{
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
                  }}
                  events={calendarEvents}
                  selectable
                  dateClick={(info) => alert(`Clicked on: ${info.dateStr}`)}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BasicCalendar;
