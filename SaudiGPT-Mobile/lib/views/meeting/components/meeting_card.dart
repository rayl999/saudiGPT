import 'package:chatgpt_hackathon/views/styles.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class MeetingCard extends StatelessWidget {
  const MeetingCard({
    super.key,
    required this.title,
    required this.date,
    required this.notes,
    required this.tasks,
  });
  final String title;
  final String date;
  final int notes;
  final int tasks;
  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () {
        //TODO: Navigate to meeting details page
        // Get.toNamed(Routes.meetingDetailsPage);
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
