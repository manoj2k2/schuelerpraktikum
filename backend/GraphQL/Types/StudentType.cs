using HotChocolate.Types;
using SchuelerpraktikumPlatform.Models;

namespace SchuelerpraktikumPlatform.GraphQL.Types
{
    public class StudentType : ObjectType<Student>
    {
        protected override void Configure(IObjectTypeDescriptor<Student> descriptor)
        {
            descriptor.Description("Represents a student.");

            descriptor.Field(s => s.Id).Description("The unique ID of the student.");
            descriptor.Field(s => s.Name).Description("The name of the student.");
            descriptor.Field(s => s.Email).Description("The email of the student.");
            descriptor.Field(s => s.School).Description("The school the student attends.");
            descriptor.Field(s => s.Applications).Description("The applications submitted by the student.");
        }
    }
}
