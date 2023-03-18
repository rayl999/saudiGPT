import 'package:chatgpt_hackathon/views/homePage/components/features_box.dart';
import 'package:chatgpt_hackathon/views/homePage/components/task_table.dart';
import 'package:chatgpt_hackathon/views/homePage/components/welcome_name.dart';
import 'package:chatgpt_hackathon/views/styles.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 20),
      decoration: BoxDecoration(
        gradient: AppColors.backgroundColor,
      ),
      child: Center(
        child: ListView(
          children: [
            const SizedBox(height: 12),
            const WelcomeName(name: "راكان"),
            const SizedBox(height: 20),
            const TaskTable(),
            const SizedBox(height: 8),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                FeaturesBox(
                  label: "تلخيص الاجتماعات",
                  icon: Icons.groups,
                  onTap: () {
                    Get.toNamed('/meetingPage');
                  },
                ),
                FeaturesBox(
                  label: "تلخيص الايميل",
                  icon: Icons.email,
                  onTap: () {},
                ),
              ],
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                FeaturesBox(
                  label: "تلخيص المستندات",
                  icon: Icons.upload_file_sharp,
                  onTap: () {},
                ),
                FeaturesBox(
                  label: "التحقق من السياق",
                  icon: Icons.search,
                  onTap: () {},
                ),
              ],
            )
          ],
        ),
      ),
    );
  }
}
