import { notification } from "antd";

type NotificationStatus = "success" | "info" | "warning" | "error";

export default function createNotification(
  status: NotificationStatus,
  placement: any,
  title: string
) {
  notification[status]({
    message: "Notification",
    description: title,
    placement,
  });
}
