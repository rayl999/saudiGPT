import 'package:chatgpt_hackathon/controllers/MainController.dart';
import 'package:chatgpt_hackathon/views/meeting/components/micBTN.dart';
import 'package:chatgpt_hackathon/views/styles.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class NowPage extends GetView<MainController> {
  const NowPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 20),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const SizedBox(height: 20),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: const [
              Text(
                "الثلاثاء",
                style: TextStyle(
                  fontSize: 24,
                  fontFamily: "DINNextLTArabic",
                ),
              ),
              Text(
                " 27 سبتمبر",
                style: TextStyle(
                  fontSize: 24,
                  fontFamily: "DINNextLTArabic",
                ),
              ),
            ],
          ),
          const SizedBox(height: 32),
          MicBTN(),
          const SizedBox(height: 32),
          Text(
            " الملاحظات",
            style: TextStyle(
              fontSize: 24,
              fontFamily: "DINNextLTArabic",
              color: AppColors.white,
            ),
          ),
          const SizedBox(height: 8),
          Container(
            height: 150,
            width: Get.width,
            padding: const EdgeInsets.all(20),
            decoration: BoxDecoration(
              color: AppColors.white,
              borderRadius: BorderRadius.circular(20),
              boxShadow: [
                BoxShadow(
                  color: AppColors.secondary.withOpacity(0.2),
                  spreadRadius: 2,
                  blurRadius: 5,
                  offset: const Offset(0, 3),
                ),
              ],
            ),
            child: Text(
              "- الملاحظات",
              style: TextStyle(
                fontSize: 24,
                fontFamily: "DINNextLTArabic",
                color: AppColors.secondary,
              ),
            ),
          ),
        ],
      ),
    );
  }
}
