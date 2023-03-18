import 'package:chatgpt_hackathon/controllers/MainController.dart';
import 'package:chatgpt_hackathon/views/meeting/tabsBody/now_page.dart';
import 'package:chatgpt_hackathon/views/meeting/tabsBody/previous_page.dart';
import 'package:chatgpt_hackathon/views/styles.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class MeetingPage extends GetView<MainController> {
  const MeetingPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('تلخيص الاجتماعات'),
        leading: IconButton(
          icon: const Icon(Icons.arrow_back_ios),
          onPressed: () => Get.back(),
        ),
      ),
      body: Container(
        decoration: BoxDecoration(
          gradient: AppColors.backgroundColor,
        ),
        child: Column(
          children: [
            const SizedBox(height: 20),
            Container(
              height: 30,
              margin: const EdgeInsets.symmetric(horizontal: 20),
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
                  ]),
              child: TabBar(
                controller: controller.tabController,
                tabs: const [
                  Tab(
                    text: "الحالية",
                  ),
                  Tab(
                    text: "السابقة",
                  ),
                ],
                labelColor: AppColors.white,
                labelStyle: const TextStyle(
                  fontSize: 18,
                  fontWeight: FontWeight.bold,
                  fontFamily: "DINNextLTArabic",
                ),
                unselectedLabelColor: AppColors.secondary,
                indicator: BoxDecoration(
                  borderRadius: BorderRadius.circular(20),
                  color: AppColors.secondary,
                ),
                indicatorColor: AppColors.secondary,
              ),
            ),
            const SizedBox(height: 20),
            Expanded(
              child: TabBarView(
                controller: controller.tabController,
                physics: const NeverScrollableScrollPhysics(),
                children: [
                  NowPage(),
                  PreviousPage(),
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}
