import 'package:chatgpt_hackathon/controllers/MainController.dart';
import 'package:chatgpt_hackathon/views/meetingDetailsPage/meeting_details_page.dart';
import 'package:chatgpt_hackathon/views/styles.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class MeetingCard extends GetView<MainController> {
  const MeetingCard({
    super.key,
    required this.title,
    required this.date,
    required this.notes,
    required this.tasks,
    required this.index,
  });
  final String title;
  final String date;
  final int notes;
  final int tasks;
  final int index;
  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () {
        Get.to(MeetingDetailsPage(
          title: title,
          summary: controller.meetingData[index]["summary"],
          tasks: controller.meetingData[index]["tasks"][0],
          notes: controller.meetingData[index]["notes"][0],
          language: controller.meetingData[index]["language"],
          key: key,
        ));
      },
      child: Container(
        height: 100,
        width: Get.width,
        padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 10),
        decoration: BoxDecoration(
          color: AppColors.white,
          border: Border(
            bottom: BorderSide(
              color: AppColors.secondary,
              width: 1,
            ),
          ),
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(
                  title,
                  style: TextStyle(
                    fontSize: 24,
                    fontFamily: "DINNextLTArabic",
                    fontWeight: FontWeight.bold,
                    color: AppColors.secondary,
                  ),
                ),
                Text(
                  date,
                  style: TextStyle(
                    fontSize: 18,
                    fontFamily: "DINNextLTArabic",
                    color: AppColors.primary,
                  ),
                ),
              ],
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(
                  "المهام: $tasks     الملاحظات: $notes",
                  style: TextStyle(
                    fontSize: 18,
                    fontFamily: "DINNextLTArabic",
                    color: AppColors.primary,
                  ),
                ),
                Icon(
                  Icons.arrow_forward_ios,
                  color: AppColors.primary,
                ),
              ],
            )
          ],
        ),
      ),
    );
  }
}
