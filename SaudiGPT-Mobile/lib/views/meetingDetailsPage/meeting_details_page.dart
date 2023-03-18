import 'package:chatgpt_hackathon/controllers/MainController.dart';
import 'package:chatgpt_hackathon/views/meetingDetailsPage/components/BoxDescription.dart';
import 'package:chatgpt_hackathon/views/styles.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class MeetingDetailsPage extends GetView<MainController> {
  const MeetingDetailsPage({
    required this.title,
    required this.summary,
    required this.tasks,
    required this.notes,
    required this.language,
    required super.key,
  });
  final String title;
  final String summary;
  final String tasks;
  final String notes;
  final String language;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text("تفاصيل الاجتماع"),
        ),
        body: Container(
          decoration: BoxDecoration(
            gradient: AppColors.backgroundColor,
          ),
          child: ListView(
            padding: const EdgeInsets.symmetric(
              horizontal: 20,
              vertical: 40,
            ),
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text(
                    title, // TODO: Get meeting title from controller
                    style: TextStyle(
                      color: AppColors.secondary,
                      fontSize: 24,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  Container(
                    decoration: BoxDecoration(
                      color: AppColors.secondary,
                      borderRadius: BorderRadius.circular(8),
                    ),
                    child: Icon(
                      Icons.description,
                      color: AppColors.white,
                      size: 40,
                    ),
                  ),
                ],
              ),
              const SizedBox(
                height: 16,
              ),
              BoxDescription(
                title: "الملخص",
                description: summary,
                language: language,
              ),
              const SizedBox(
                height: 8,
              ),
              BoxDescription(
                title: "المهام",
                description: tasks,
                language: language,
              ),
              const SizedBox(
                height: 8,
              ),
              BoxDescription(
                title: "الملاحظات",
                description: notes,
                language: language,
              ),
            ],
          ),
        ));
  }
}
