import 'package:chatgpt_hackathon/controllers/MainController.dart';
import 'package:chatgpt_hackathon/views/meeting/components/meeting_card.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class PreviousPage extends GetView<MainController> {
  const PreviousPage({super.key});

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: controller.meetingData.length,
      itemBuilder: (context, index) {
        return MeetingCard(
          title: controller.meetingData[index]["title"],
          date: controller.meetingData[index]["date"],
          notes: controller.meetingData[index]["notes"].length,
          tasks: controller.meetingData[index]["tasks"].length,
        );
      },
    );
  }
}
