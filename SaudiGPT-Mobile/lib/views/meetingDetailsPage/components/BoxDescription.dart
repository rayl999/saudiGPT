import 'package:chatgpt_hackathon/controllers/MainController.dart';
import 'package:chatgpt_hackathon/views/styles.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class BoxDescription extends GetView<MainController> {
  const BoxDescription({
    super.key,
    required this.title,
    required this.description,
    required this.language,
  });
  final String title;
  final String description;
  final String language;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          title,
          style: TextStyle(
            color: AppColors.secondary,
            fontSize: 18,
            fontWeight: FontWeight.bold,
          ),
        ),
        const SizedBox(
          height: 8,
        ),
        Container(
          width: Get.width,
          padding: const EdgeInsets.all(20),
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(8),
          ),
          alignment:
              language == "AR" ? Alignment.centerRight : Alignment.centerLeft,
          child: Text(
            description,
            textAlign: language == "AR" ? TextAlign.right : TextAlign.left,
            style: TextStyle(
              color: AppColors.secondary,
              fontSize: 16,
            ),
          ),
        ),
      ],
    );
  }
}
