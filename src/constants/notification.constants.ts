import { message } from "antd";

type NotificationStatus = "success" | "info" | "warning" | "error";

export default function createNotification(
  status: NotificationStatus,
  title: string
) {
  message[status](title); //placement
  // notification[status]({
  //   message: "Notification",
  //   description: title,
  //   placement,
  // });
}
